import Vue from 'vue'
import { Message } from './index'

declare module "vue/types/vue" {
  interface Vue {
    $message: Message
  }
}