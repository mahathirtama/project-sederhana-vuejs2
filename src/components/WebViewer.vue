<template>
    <div id="webviewer" refs="viewer">

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import WebViewer from '@pdftron/webviewer'
export default Vue.extend({
    name: 'WebViewerVue',
    props: {
         path: '',
         url: ''
    },
//     mounted: function () {
//     WebViewer({
//       path: this.path,
//       initialDoc: this.url, // replace with your own PDF file
//     }, this.$refs.viewer).then((instance) => {
//       // at this point, the viewer is 'ready'
//       const { Core, UI } = instance;
//       const { documentViewer, annotationManager, Annotations, Tools } = Core;

//       // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info.
//       documentViewer.addEventListener('documentLoaded', function() {
//           // call methods relating to the loaded document
//       });
//     });
//   }

})
</script>

<style>

#webviewer {
    height: 800px;
}

</style>