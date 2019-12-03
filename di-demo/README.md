# angular 依赖注入

## 一、imports,declarations,providers 介绍

imports 中写入的是当前模块导入的其他模块，故 imports 应该导入的是 module；declarations 中写入的是当前模块内包含的公共组件、指令信息，故其中应该是声明的是 components；prividers 是导入当前模块可以使用的公共服务，也可以是其他 npm 包中的服务，故其中导入的应该是 service。代码示例如下：

```typescript
@NgModule({
  declarations: [AppComponent, InjectionDemoComponent],
  imports: [BrowserModule],
  providers: [{ provide: UserInfoService, useClass: LoginUserInfoService }],
  bootstrap: [AppComponent]
})
```

其中 provides 中导入服务有较多的形式，将在下文做详细的介绍。
