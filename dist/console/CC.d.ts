import { BaseConsoleView } from "./view/BaseConsoleView";
import { DisplayListView } from "./view/DisplayListView";
import { Config } from "./Config";
import { TooltipManager } from "../tooltip/TooltipManager";
export declare class CC {
    private static eventListenerHelper;
    private static root;
    private static viewsCont;
    private static tooltipsCont;
    private static password;
    private static passwordInputIndex;
    static config: Config;
    static tooltipManager: TooltipManager;
    private static view;
    static displayListView: DisplayListView;
    static startInit(root: any, password?: string, config?: Config): void;
    private static onPasswordInput();
    static visible: boolean;
    static showView(view: BaseConsoleView, moveToMouse?: boolean): void;
    static hideView(view: BaseConsoleView): void;
    static toggleView(view: BaseConsoleView, moveToMouse?: boolean): void;
    static moveViewToTopLayer(view: BaseConsoleView): void;
}
