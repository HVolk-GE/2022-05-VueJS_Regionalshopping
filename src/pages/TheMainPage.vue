<template>
  <TheMainLayout>
    <template #default>
      <div class="container">
        <div class="row">
          <div class="offset-2 col-8">
            <div class="card m-4">
              <div class="card-body text-center">
                <img src="@/assets/pic/wappen-limburg-weilburg.png" />
                <div class="display-5 text-center">Kreis Limburg-Weilburg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheMainLayout>
</template>

<script>
'use strict';
import TheMainLayout from "@/layouts/TheMainLayout";

export default {
  name: "TheMyMainPage",
  components: {
    TheMainLayout,
  },
};
</script>

<style scoped>
</style>>
