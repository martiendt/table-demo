<template>
  <div id="app">
    <point-table>
      <template slot="p-head">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
      </template>
      
      <template slot="p-body">
        <tr>
          <td>John Doe</td>
          <td>21 Street</td>
          <td>+627314691</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>22 Street</td>
          <td>+627314692</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>23 Street</td>
          <td>+627314693</td>
        </tr>
      </template>
    </point-table>
    <point-table>
      <template slot="p-extra">
        <tr>
          <th colspan="2"></th>
          <th colspan="6">19 Nov</th>
        </tr>
        <tr>
          <th colspan="2"></th>
          <th colspan="3">Target</th>
          <th colspan="3">Actual</th>
        </tr>
      </template>
      <template slot="p-head">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Call</th>
          <th>Ec</th>
          <th>Value</th>
          <th>Call</th>
          <th>Ec</th>
          <th>Value</th>
        </tr>
      </template>
      <template slot="p-body">
        <tr>
          <td>1</td>
          <td>Adhi Lorraine</td>
          <td>5</td>
          <td>3</td>
          <td>750000</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Bagas Saputra</td>
          <td>5</td>
          <td>3</td>
          <td>750000</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Bagus</td>
          <td>5</td>
          <td>3</td>
          <td>650000</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </template>
    </point-table>
    <img alt="Vue logo" src="./assets/logo.png">
    <point-table :data="streets"/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ipsam cum quis est, totam placeat laudantium omnis necessitatibus quam expedita in reiciendis tenetur odit, tempore unde quae dignissimos aut!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit corporis minima aut, nihil perspiciatis architecto enim est temporibus labore nesciunt animi nam amet quisquam iure, magni possimus perferendis ipsa.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, at. Adipisci fugiat eius eaque nisi esse? Delectus perspiciatis illum unde eum recusandae, quos provident ut doloremque iusto reprehenderit sequi ipsa?
  </div>
</template>

<script>
import streets from './street.json'

export default {
  name: 'app',
  data () {
    return {
      streets: streets
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
