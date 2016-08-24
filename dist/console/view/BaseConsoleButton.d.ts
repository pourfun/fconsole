import { IDisplayObjectContainerWrapper } from "fgraphics/dist/index";
import { BaseEventListenerObject } from "fcore/dist/index";
export declare class BaseConsoleButton extends BaseEventListenerObject {
    view: IDisplayObjectContainerWrapper;
    private field;
    private _label;
    constructor();
    protected construction(): void;
    protected addListeners(): void;
    private onOver();
    private onOut();
    protected onClick(): void;
    protected commitData(): void;
    protected arrange(): void;
    label: string;
}
