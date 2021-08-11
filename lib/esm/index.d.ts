import React from "react";
interface component {
    title?: string;
    onPress?: () => void;
    type?: any;
    formName?: string;
}
declare const SayHello: React.FC<component>;
export default SayHello;
