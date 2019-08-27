<template>
<v-flex>
    <v-card
    width="350"
    height="150"
    elevation="10">
    <v-row>
        <v-col>
        <v-img class= "pa-3 mx-1" height="125" width="150"
        src="https://placeimg.com/150/125/animals"></v-img>
        </v-col>
        <v-divider class="my-4" height="80" :inset="inset" vertical></v-divider>
        <v-col>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Store</v-list-item-title>
                    <v-list-item-subtitle>~~~</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-col></v-col>
            <v-col>
                <v-btn small bottom rounded color="#E65100">Go Store</v-btn>
            </v-col>
        </v-col>
    </v-row>
    </v-card>
</v-flex>
</template>