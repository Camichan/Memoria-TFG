export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/hello-world-vis/hello-world-vis'
      ]
    }
  });
}