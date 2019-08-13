<template>
    <div id="app">
        <v-toolbar color="#E65100" id="toolbar">
            <v-btn icon>
            <v-icon href="/messagelist" color="#FFF3E0">sms</v-icon>
            </v-btn >
            <v-spacer></v-spacer>
            <v-spacer>LOGO</v-spacer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon color="#FFF3E0">dehaze</v-icon></v-toolbar-side-icon>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute temporary right>
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-avatar>
                    <v-icon>person</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>user</v-list-item-title>
                    <v-list-item-subtitle>님 반갑습니다!</v-list-item-subtitle>
                </v-list-item-content>
                    <v-badge overlap left color="#E65100">
                        <template v-slot:badge>0</template>
                        <v-icon>notifications</v-icon>
                    </v-badge>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-toolbar dense floating>
                <v-text-field hide-details prepend-icon="search" single-line></v-text-field>
            </v-toolbar>

            <v-list dense>
                <v-list-tile v-for="item in items" :key="item.title" @click="goNav(item.address)">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
  components:{
   
  },
  data:function(){
    return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'home', address: 'main'},
          { title: 'MyPat', icon: 'sentiment_satisfied_alt'},
          { title: 'Group' ,icon:'group'},
          { title: 'Store', icon:'store_mall_directory'},
          { title: 'Setting' , icon:'settings'}
        ]
      }
  }
}
</script>

<style>
    #toolbar{
    background-color : #E65100;
  }

</style>

