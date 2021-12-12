// 外部模块 称 模块
// 内部模块 称 命名空间
declare module global {
  namespace NodeJS {
    interface Global {
      circle: string;
    }
  }
}