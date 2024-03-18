import { DeltaStatic, Sources } from 'quill';
import  { UnprivilegedEditor } from 'react-quill'

export interface QuillEditorProps {
    value: string | DeltaStatic;
    onChange: (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void
}