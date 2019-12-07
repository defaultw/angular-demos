# angular依赖注入

## 一、imports,declarations,providers介绍

imports中写入的是当前模块导入的其他模块，故imports应该导入的是module；declarations中写入的是当前模块内包含的公共组件、指令信息，故其中应该是声明的是components；prividers是导入当前模块可以使用的公共服务，也可以是其他npm包中的服务，故其中导入的应该是service。代码示例如下：

```typescript
@NgModule({
  declarations: [AppComponent, InjectionDemoComponent],
  imports: [BrowserModule],
  providers: [{ provide: UserInfoService, useClass: LoginUserInfoService }],
  bootstrap: [AppComponent]
})
```

其中provides中导入服务有较多的形式，将在下文做详细的介绍。

## 二、定义提供器的方式

### 1.基本方式

```typescript
providers: [LoginUserInfoService]
```

基本方式中，可以直接在`provides`中将需要的服务写入，相当于使用`new`实例化了一个对象，这样的话就可以在其他的服务或者组件中使用该服务。

### 2.uerClass

```typescript
providers: 
[{ provide: UserInfoService, useClass:LoginUserInfoService }]
```

使用`useClass`可以根据需要，选择注入非默认的服务。

### 3.useFactory

```typescript
providers: [
    // { provide: UserInfoService, useClass: LoginUserInfoService }
    {
      provide: UserInfoService,
      useFactory: () => {
        const dev = Math.random() > 0.5;
        console.log(dev);
        if (dev) {
          return new LoginUserInfoService();
        } else {
          return new LogoutUserInfoService();
        }
      },
      deps: []
    }
```

使用`useFactory`可以根据不同的条件，使用不同的服务。在上述代码中,`dev`为随机生成的一个判断的条件，通过`useFactory`可以返回不同的服务，这样在其他地方调用`UserInfoService`时就会使用不同的服务，展示不同的结果。其中，`deps`是Factory中需要注入的内容。

### 4.useValue

变量也可以如服务一般备注入，可以使用如下方法注入：

```typescript
providers: [
    // { provide: UserInfoService, useClass: LoginUserInfoService }
    {
      provide: UserInfoService,
      useFactory: isDev => {
        // const dev = Math.random() > 0.5;
        console.log(isDev);
        if (isDev.isDev) {
          return new LoginUserInfoService();
        } else {
          return new LogoutUserInfoService();
        }
      },
      deps: ['IS_DEV']
    },
    // { provide: 'IS_DEV', useValue: true }
    { provide: 'IS_DEV', useValue: { isDev: true } }
  ],
```

其中16行为为注入了一个变量，在其他需要的地方就可以注入这个变量，如可以先在3中的`useFactory`的`deps`中注入这个变量，然后就可以在其中使用。当然，`useValue`可以是一个普通变量，也可以是一个对象（如上述代码17行所示）。

## 三、多级注入器

![层级关系图](https://github.com/defaultw/angular-demos/blob/master/di-demo/src/assets/img/cengjiguanxi.PNG?raw=true)
### 1.在@Injectable级进行配置

`@Injectable()`装饰器会标出每一个服务类。服务类的元数据选项`providerIn`会指定一个注入器，同常会使用`root`作为该服务的提供商。当可注入的类向root注入器提供了自己的服务时，任何导入该类的地方都能使用这个服务。

```typescript
import { Injectable } from '@angular/core';
import { User } from '../User';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUserInfoService implements UserInfoService {
  getUser() {
    return new User(1, 'login');
  }
  constructor() {}
}
```

在其他服务中使用该服务（代码只展示部分内容）：

```typescript
import { LoginUserInfoService } from '../service/login-user-info.service';

constructor(private loginUserInfoService: LoginUserInfoService) {}
```

除了指给`root`注入器之外，我们还可以将`providerIn`设置为某个特定的`NgModule`。一般来说，这中写法和在`@NgModule`本身的装饰器上配置注入器没有多少的不同，主要的区别就是如果`@NgModule`没有用到改服务，那么它可以被优化掉。

### 2.@NgModule级注入器

我们还可以在非根`NgModule`元数据的`providers`选项中配置一个模块级的提供商，这样可以将该服务的范围限制在该模块这一级别。如果在`AppModule`的`@NgModule()`元数据中配置了全应用级的提供商，那么它将会覆盖通过`@Injectable()`配置的那一个。你可以用这种方式来为那些供多个应用使用的服务指定非默认的提供商。代码如下：

```typescript
providers: 
[{ provide: UserInfoService, useClass:LoginUserInfoService }]
```

### 3.Component级注入器

`NgModule` 中每个组件都有它自己的注入器。 通过使用 `@Component` 元数据在组件级配置某个提供商，你可以把这个提供商的范围限定到该组件及其子组件。以下代码摘至[Angular中文网](https://angular.cn/guide/hierarchical-dependency-injection#where-to-configure-providers):

```typescript
import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-heroes',
  providers: [ HeroService ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesComponent { }
```

## 四、参考文献

[1] [Angular中文网](https://github.com/defaultw/angular-demos/blob/master/di-demo/src/assets/img/cengjiguanxi.PNG?raw=true)

[2] 慕课网课程

> 注：刚刚开始学习Angular，将使用写系列文章来记录学习笔记及学习过程。如文中有描述不正确或者不标准的内容希望大家可以在评论中予以指正，万分感谢。