<template>
<v-flex>
    <v-row>
    <v-col>
    <v-card
    width="350"
    height="75"
    elevation="10"
    v-show="show">
    <v-list-item three-line>
        <v-list-item-content class="align-self-start">
            <v-list-item-title
            class="headline mb-2">ID</v-list-item-title>
            <v-list-item-subtitle>~~~comment.</v-list-item-subtitle>
        </v-list-item-content>
            <v-list-item-avatar size="70" tile>
                <v-img height="55" width="70"
        src="https://placeimg.com/70/55/animals"></v-img>
            </v-list-item-avatar>
    </v-list-item>
    </v-card>
    </v-col>
    </v-row>
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