<template>
    <input class="inputField" type="text" :value="modelValue" @input="handleInputChange">
</template>

<script>
    export default {
        name: "CustomInput",
        props: {
            modelValue: {
                type: [String, Number],
                required: true
            }
        },
        methods: {
            handleInputChange(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .inputField {
        padding: 0;
    }

    .AddInput {
        width: calc(100% - 4px);
        margin-top:10px;
    }

    .viewInput {
        text-align:center;
        width:100%;
        border:none;
    }

</style>
