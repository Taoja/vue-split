<template>
  <div>
    <div></div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default () {
        return [
          {
            type: 'normal',
            data: [
              {
                name: 'column1',
                src: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
