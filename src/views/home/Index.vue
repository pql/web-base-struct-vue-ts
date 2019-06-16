<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Home extends Vue {
  render (h, context) {
    return (
      <el-button onClick={this.testAxios}>默认按钮</el-button>
    )
  }

  testAxios () {
    this.$router.push({
      name: 'login'
    })
  }
}
</script>