<template src="./NoteForm.html"></template>

<script>
export default {
  name: 'NoteForm',
  data: () => {
    return {
      name: '',
      count: 0,
      price: 0
    }
  },
  methods: {
    submit(e) {
      if (!this.name || !this.count || !this.price) {
        return
      }
      this.$emit('addNoteItem', { name: this.name, count: this.count, price: this.price })
      this.name = '';
      this.count = 0;
      this.price = 0;
      e.target.firstElementChild.firstElementChild.focus()
    }
  }
}
</script>
