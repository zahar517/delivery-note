<template src="./NoteListItem.html"></template>

<script>
export default {
  name: 'NoteListItem',
  props: [
    'item'
  ],
  data: () => {
    return {
      cacheData: null,
      editedItem: null,
      prop: null
    }
  },
  methods: {
    removeItem(item) {
      this.$emit('removeNoteItem', item)
    },
    showInput(item, prop) {
      if (this.editedItem === item && this.prop === prop) {
        return true
      }
      return false
    },
    clearData() {
      this.cacheData = null
      this.editedItem = null
      this.prop = null
    },
    startEditElement(item, prop) {
      this.cacheData = item[prop]
      this.editedItem = item
      this.prop = prop
    },
    cancelEditElement(item, prop) {
      item[prop] = this.cacheData
      this.clearData()
    },
    doneEditElement(item, prop) {
      if (!this.editedItem) {
        return
      }
      if (!item[prop]) {
        item[prop] = this.cacheData
      }
      this.clearData()
    }
  }
}
</script>
