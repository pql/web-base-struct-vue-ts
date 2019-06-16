<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Login extends Vue {
  render (h, context) {
    return (
      <div id='login'>
        登录
      </div>
    )
  }
}
</script>
