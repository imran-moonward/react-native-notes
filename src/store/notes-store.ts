import {create} from 'zustand';
import {CategoryType, Client, Note} from '../types/general-types';
import {categoryList, clientList} from '../constants/constants';

type State = {
  notes: Note[];
  categories: CategoryType[];
  clientList: Client[];
};

type Action = {
  addRemoveNote: (note: Note) => void;
  addClient: (client: Client) => void;
  removeClient: (client: Client) => void;
  addCategory: (categoryType: CategoryType) => void;
  removeCategory: (categoryType: CategoryType) => void;
  updateNote: (note: Note) => void;
};

type NoteStore = State & Action;

const useNoteStore = create<NoteStore>(set => ({
  notes: [],
  clientList: clientList,
  categories: categoryList,
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
  addCategory(category) {
    set(state => {
      return {
        categories: [...state.categories, category],
      };
    });
  },
  removeCategory(category) {
    set(state => {
      return {
        categories: state.categories.filter(c => c !== category),
      };
    });
  },
  addClient(client) {
    set(state => {
      return {
        clientList: [...state.clientList, client],
      };
    });
  },
  removeClient(client) {
    set(state => {
      return {
        clientList: state.clientList.filter(c => c.id !== client.id),
      };
    });
  },
  updateNote(noteToUpdate) {
    set(state => {
      const {notes} = state;
      const updatedNotes = notes.map(note => {
        if (note.id === noteToUpdate.id) {
          return {...note, ...noteToUpdate};
        }
        return note;
      });
      return {notes: updatedNotes};
    });
  },
}));

export default useNoteStore;
