import React, { FunctionComponent, ComponentType } from "react";
import "../style/main.scss";

interface IYarenApp {
    Component: ComponentType;
    pageProps: Record<string, unknown>;
}

const YarenApp: FunctionComponent<IYarenApp> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
}

export default YarenApp;
