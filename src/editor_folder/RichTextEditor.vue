<template>
  <div class="text-editor">
    <h3>Câu hỏi 1</h3>
    <label for="content">Nội dung</label>

    <!-- Toolbar -->
    <div class="toolbar">
      <button :class="{active:isBold}" @click="toggleBold"><b>B</b></button>
      <button :class="{active:isItalic}" @click="toggleItalic"><i>I</i></button>
      <button :class="{active:isUnderline}" @click="toggleUnderline"><u>U</u></button>
      <button @click="insertLink()">🔗</button>
      <button @click="insertImage()">🖼️</button>
    </div>

    <!-- Editable content area -->
    <div
      id="editor"
      ref="editor"
      contenteditable="true"
      class="editor"
      @input="updateContent"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      isBold: false,
      isItalic: false,
      isUnderline: false,
    };
  },
  methods: {
    toggleBold() {
      document.execCommand("bold");
      this.isBold = document.queryCommandState("bold");
    },
    toggleItalic() {
      document.execCommand('italic');
      this.isItalic = document.queryCommandState('italic');
    },
    toggleUnderline() {
      document.execCommand('underline');
      this.isUnderline = document.queryCommandState('underline');
    },
    
    updateContent() {
      const editor = this.$refs.editor;
      this.content = editor.innerHTML;
      console.log(this.content);
    },
    insertLink() {
      const url = prompt("Nhập URL liên kết", "https://");
      if (url) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const link = document.createElement("a");
          link.href = url;
          link.textContent = url;
          link.target = "_blank";
          range.deleteContents();
          range.insertNode(link);
        }
      }
    },
    insertImage() {
      const url = prompt("Nhập URL hình ảnh", "https://");
      if (url) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const image = document.createElement("img");
          image.src = url;
          image.style.maxWidth = "100%";
          image.style.height = "auto";
          range.deleteContents();
          range.insertNode(image);
        }
      }
    },
  },
};
</script>

<style scoped>
.text-editor {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.toolbar {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  align-self: flex-end;
  justify-content: flex-end;
}

.toolbar button {
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.editor {
  min-height: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
