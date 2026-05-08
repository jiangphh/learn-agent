<template>
      <div class="home-main">
            <van-nav-bar title="智能规划" />
            <van-notice-bar left-icon="volume-o" text="AI规划" />
            <div class="card search-card">
                  <van-form @submit="onSubmit">
                        <van-cell-group inset>
                              <van-field v-model="formData.result" is-link readonly name="area" label="目的地" placeholder="点击选择省市区"
                                    @click="showArea = true" />
                              <van-popup v-model:show="showArea" destroy-on-close position="bottom">
                                    <van-area :area-list="areaList" :model-value="pickerValue" @confirm="onConfirm"
                                          @cancel="showArea = false" />
                              </van-popup>
                              <van-field v-model="formData.budget" name="budget" label="预算" placeholder="请填写预算"
                                    :rules="[{ required: true, message: '请填写预算' }]" />
                              <van-field v-model="formData.days" name="days" label="天数" placeholder="请填写天数"
                                    :rules="[{ required: true, message: '请填写天数' }]" />
                        </van-cell-group>
                        <div style="margin: 16px;">
                              <van-button round block type="primary" native-type="submit">
                                    开始规划
                              </van-button>
                        </div>
                  </van-form>
            </div>
      </div>

</template>

<script setup>
import { areaList } from '@vant/area-data';
const showArea = ref(false);
const pickerValue = ref('');
const onConfirm = ({ selectedValues, selectedOptions }) => {
      pickerValue.value = selectedValues.length
            ? selectedValues[selectedValues.length - 1]
            : '';
      showArea.value = false;
      formData.result = selectedOptions.map((item) => item.text).join('/');
};

const formData=reactive({
      result:'',
      budget:'',
      days:''
})
// 行程规划
function onSubmit(){
      console.log(formData)
}
</script>

<style lang="css" scoped>
.home-main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
}


.card {
      margin: 0px 12px;
      background: white;
}

.search-card {
      display: flex;
      flex-direction: column;
      gap: 8px;
}
</style>