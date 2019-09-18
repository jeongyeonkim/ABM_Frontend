<template>
<v-flex>
    <v-card
        class = "mx-auto"
        xs12 sm8 md4
        elevaiton="10"
        @click="goGroupFeed()"
    >
    <v-img
        class = "white--text"
        height = "150px"
        src = "https://placeimg.com/200/150/animals"
    >
    <v-card-actions>
        <div>
            <v-btn
                class = "mx-2" fab dark x-small color="error" v-on="{stop:goGroupFeed,}">
                    <v-icon dark>
                    delete
                    </v-icon>
            </v-btn>
        </div>
    </v-card-actions>
    <v-card-title class = "align-end fill-height">Group Name</v-card-title>
    </v-img>
   <v-card-actions>
        <div>
            <v-btn
                class = "mx-2" fab dark x-small color="error" v-on="{stop:goGroupFeed,}">
                    <v-icon dark>
                    delete
                    </v-icon>
            </v-btn>
        </div>
    </v-card-actions>
    <v-card-text>
        <v-icon>person_pin</v-icon>
        <span>100</span><br>
        <span class = "text--primary">
        <span> this group is ~~~ group! welcome! </span><br>
        <v-card-text>
            <v-chip :ripple="false" class="mr-2">dog</v-chip>
            <v-chip :ripple="false" class="mr-2">cat</v-chip>
        </v-card-text>
        </span>
    </v-card-text>
    </v-card>
</v-flex>
</template>
<script>
export default {
    data: () => {
        return {
            show: true
        }
    },

    methods: { 
        goGroupFeed(){
            this.$router.push({name: 'feedgroup'})
        }
    }
}
</script>