<template src="./App.html"></template>
<style src="./App.css"></style>

<script>
import NoteForm from './components/NoteForm/NoteForm'
import NoteList from './components/NoteList/NoteList'

export default {
  name: 'app',
  components: {
    NoteList,
    NoteForm
  },
  methods: {
    getUid() {
      return ++this.id
    },
    addNoteItemHandler(item) {
      item.id = this.getUid()
      this.items.push(item)
    },
    removeNoteItemHandler(item) {
      const index = this.items.findIndex(el => el.id === item.id)
      if (index !== -1) {
        this.items.splice(index, 1)        
      }
    }
  },
  computed: {
    getSum() {
      return this.items.reduce((prev, cur) => {
        return prev + cur.count * cur.price
      }, 0)
    }
  },
  data: () => {
    return {
      id: 0,
      sum: 0,
      items: []
    }
  }
}
</script>
