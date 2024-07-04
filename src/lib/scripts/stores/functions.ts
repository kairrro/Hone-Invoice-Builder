import { addProductPanel, editorOpen } from "./values";

export function closeEditor(){
    editorOpen.set(false);
}

export function openEditor(){
    editorOpen.set(true);
}

export function openProductPanel(){
    addProductPanel.set(true);
}

export function closeProductPanel(){
    addProductPanel.set(false);
}