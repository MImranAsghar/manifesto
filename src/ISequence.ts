module Manifesto {
    export interface ISequence extends IManifestResource {
        getCanvasById(id: string): ICanvas;
        getCanvasByIndex(index: number): ICanvas;
        getCanvasIndexById(id: string): number;
        getCanvasIndexByLabel(label: string): number;
        getLastCanvasLabel(): string;
        getLastPageIndex(): number;
        getNextPageIndex(index: number): number;
        getPagedIndices(index: number): number[];
        getPrevPageIndex(index: number): number;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height: number): Manifesto.Thumb[];
        getTotalCanvases(): number;
        isCanvasIndexOutOfRange(index: number): boolean;
        isFirstCanvas(index: number): boolean;
        isLastCanvas(index: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
        startCanvas: string;
        viewingDirection: Manifesto.ViewingDirection;
        viewingHint: Manifesto.ViewingHint;
    }
}