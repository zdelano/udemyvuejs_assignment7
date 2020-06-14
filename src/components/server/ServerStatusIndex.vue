<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6 index">
            <ul class="list-group">
                <server-status v-for="index in 5" :index="index"></server-status>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6 details">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>
<script>
import ServerStatus from './SeverStatus.vue'
export default {
    components: {
        'server-status': ServerStatus
    }
}
</script>
<style scoped lang="css">
    div.details {
        border: 1px solid red;
    }
    div.index {
        border: 1px solid blue;
    }
</style>