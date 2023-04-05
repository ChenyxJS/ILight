<!--
 * @Author: chenyx
 * @Date: 2023-04-03 22:11:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 22:45:19
 * @FilePath: /Ilight-V3/src/components/WaveInput/index.vue
-->

<script setup lang="ts">
import { computed, reactive } from 'vue';

const props = defineProps({
    data: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
});
const state = reactive({
    modelval: props.data,
});
const strList = computed(() => {
    return props.placeholder.split('');
});
</script>
<template>
    <div class="wave-group">
        <input v-model="state.modelval" :type="type" class="input" />
        <span class="bar"></span>
        <label class="label">
            <span
                v-for="(item, index) in strList"
                :key="index"
                :class="['label-char', { 'label-char-valid': state.modelval.length > 0 }]"
                :style="{ '--index': index }"
            >
                {{ item }}</span
            >
        </label>
    </div>
</template>
<style lang="scss" scoped>
.wave-group {
    position: relative;
    width: 100%;
}

.wave-group .input {
    position: relative;
    font-size: 16px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #515151;
}

.wave-group .input:focus {
    outline: none;
}
.wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0px;
    display: flex;
}
.wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0px;
    display: flex;
}

.wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.05s);
}

.wave-group .input:hover ~ label .label-char {
    transform: translateY(-25px);
    font-size: 20px;
    color: #5264ae;
}
.wave-group .bar {
    position: relative;
    display: block;
    width: 100%;
}

.wave-group .bar:before,
.wave-group .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
    left: 50%;
}

.wave-group .bar:after {
    right: 50%;
}

.wave-group .input:hover ~ .bar:before,
.wave-group .input:hover ~ .bar:after {
    width: 50%;
}

label .label-char-valid {
    transform: translateY(-25px);
    font-size: 20px;
    color: #5264ae;
}
</style>
