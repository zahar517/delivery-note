<template src="./NoteList.html"></template>

<script>
import NoteListItem from '../NoteListItem/NoteListItem'

export default {
  name: 'NoteList',
  components: {
    NoteListItem
  },
  props: {
    items: Array
  },
  methods: {
    removeNoteItem(item) {
      this.$emit('removeNoteItem', item)
    }
  }
}
</script>
