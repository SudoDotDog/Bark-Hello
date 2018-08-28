require("ts-node").register({
    compilerOptions: {
        sourceMap: true,
        strict: true,
        noImplicitReturns: true,
        noImplicitAny: true,
        module: "commonjs",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        moduleResolution: "node",
        target: "es6",
        jsx: "react",
        lib: [
            "dom",
            "es5",
            "es2015",
            "es2016",
            "es2017",
        ]
    },
});