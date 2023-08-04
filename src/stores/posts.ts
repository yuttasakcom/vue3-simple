import { defineStore } from 'pinia'

type Post = {
    userId: number
    id: number
    title: string
    body: string
}
const posts: Post[] = []
export const usePostStore = defineStore({
  id: 'posts',
  state: () => ({
    posts,
    loading: false,
  }),

  getters: {
    countPosts():number {
        return this.posts.length
    }
  },
  actions: {
    async fetchPosts() {
        this.posts = []
        this.loading = true
        try {
          this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json()) 
        } finally {
          this.loading = false
        }
      },
  }
})
