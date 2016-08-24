import { BaseConsoleButton } from "../BaseConsoleButton";
import { InputManagerEventData } from "flibs/dist/index";
export declare class CaptureKeyButton extends BaseConsoleButton {
    private static CAPTURE_LABEL_FIRST_PART;
    private static NO_CAPTURE_KEY_TEXT;
    private static CLICKED_HELP_TEXT;
    private captureKey;
    private captureCode;
    private _isClicked;
    constructor();
    protected construction(): void;
    protected addListeners(): void;
    protected onClick(): void;
    protected onKeyPress(data: InputManagerEventData): void;
    protected commitData(): void;
    protected arrange(): void;
    isClicked: boolean;
}
