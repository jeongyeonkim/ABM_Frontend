<template>
<v-flex>
    <v-card
        class = "mx-auto"
        xs12 sm8 md4
        elevaiton-12
        v-show="show"
    >
    <v-img
        class = "white--text"
        height = "150px"
        src = "https://placeimg.com/200/150/animals"
    >
    <v-card-actions>
        <div class = "close">
            <v-btn
                class = "mx-2" fab dark x-small color="error" @click="show=false">
                    <v-icon dark>
                    remove
                    </v-icon>
            </v-btn>
        </div>
    </v-card-actions>
    <v-card-title class = "align-end fill-height">Group Name</v-card-title>
    </v-img>

    <v-card-text>
        <v-icon>person_pin</v-icon>
        <span>numberofmember</span><br>
        <span class = "text--primary">
        <span>    Explain about Group</span><br>
        <v-card-text>
            <v-chip :ripple="false" class="mr-2">Tag1</v-chip>
            <v-chip :ripple="false" class="mr-2">Tag2</v-chip>
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
    }
}
</script>