window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ExibirMensagens = window.blockly.js.blockly.ExibirMensagens || {};

/**
 * @function SucessoNot
 *
 *
 *
 *
 * @author Mateus Da Silva Garcia
 * @since 06/06/2023, 14:33:23
 *
 */
window.blockly.js.blockly.ExibirMensagens.SucessoNotArgs = [];
window.blockly.js.blockly.ExibirMensagens.SucessoNot = async function() {

  //
  this.cronapi.screen.notify('success','Sucesso');
}
