<template>
<v-card
    max-width="500"
    class="mx-auto"
    tile>
    <v-list dense>
        <v-subheader>Recent notice</v-subheader>
        <v-list-item-group v-model="item" color="#E65100">
            <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://placeimg.com/150/150/animals"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>yujin(ID) left a comment "abcdefg".</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        <v-subheader>Previous</v-subheader>
    </v-list>
</v-card>
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