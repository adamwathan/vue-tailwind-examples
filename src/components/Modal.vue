<template>
  <portal to="modals">
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
      <transition
        @before-leave="backdropLeaving = true"
        @after-leave="backdropLeaving = false"
        enter-active-class="transition-all transition-fast ease-out-quad"
        leave-active-class="transition-all transition-medium ease-in-quad"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        appear
      >
        <div v-if="showBackdrop">
          <div class="absolute inset-0 bg-black opacity-25" @click="close"></div>
        </div>
      </transition>

      <transition
        @before-leave="cardLeaving = true"
        @after-leave="cardLeaving = false"
        enter-active-class="transition-all transition-fast ease-out-quad"
        leave-active-class="transition-all transition-medium ease-in-quad"
        enter-class="opacity-0 scale-70"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-70"
        appear
      >
        <div v-if="showContent" class="relative">
          <slot></slot>
        </div>
      </transition>
    </div>
  </portal>
</template>

<script>
export default {
  props: ['open'],
  data() {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false,
    }
  },
  created() {
    const onEscape = (e) => {
      if (this.open && e.keyCode === 27) {
        this.close()
      }
    }

    document.addEventListener('keydown', onEscape)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  watch: {
    open: {
      handler: function (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving(newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  computed: {
    leaving() {
      return this.backdropLeaving || this.cardLeaving
    }
  },
  methods: {
    show() {
      this.showModal = true
      this.showBackdrop = true
      this.showContent = true
    },
    close() {
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
