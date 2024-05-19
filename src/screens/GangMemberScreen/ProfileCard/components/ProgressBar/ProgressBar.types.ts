import { ProgressBarUnion } from "./ProgressBar.const";

export interface ProgressBarOptions {
    width: number;
    variant: ProgressBarUnion;
    progress: number;
}