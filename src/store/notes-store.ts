import {create} from 'zustand';
import {Note} from '../types/general-types';

type State = {
  notes: Note[];
};

type Action = {
  addRemoveNote: (note: Note) => void;
  updateNote: (note: Note) => void;
};

type NoteStore = State & Action;

const useNoteStore = create<NoteStore>(set => ({
  notes: [],
  addRemoveNote(note) {
    set(state => {
      const {notes} = state;
      const doesNoteExist = notes.some(n => n.id === note.id);
      if (doesNoteExist) {
        const filteredNotes = notes.filter(
          sourceData => sourceData.id !== note.id,
        );
        return {notes: filteredNotes};
      }
      const addedNotes = [...notes, note];
      return {notes: addedNotes};
    });
  },
  updateNote(note) {},
}));

export default useNoteStore;
