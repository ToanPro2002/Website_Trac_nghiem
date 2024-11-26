<template>
  <div class="text-editor">
    <h3>Câu hỏi 1</h3>
    <label for="content">Nội dung</label>

    <!-- Toolbar -->
    <div class="toolbar">
      <button @click="toggleWrapText('**')">B</button>
      <button @click="toggleWrapText('*')">I</button>
      <button @click="toggleWrapText('__')">U</button>
      <button @click="insertLink()">🔗</button>
    </div>

    <!-- Textarea input -->
    <textarea
      ref="textarea"
      v-model="content"
      placeholder="Nhập nội dung..."
    ></textarea>

    <!-- Preview output -->
    <!-- <div class="preview" v-html="renderMarkdown(content)"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      formatFlags: {
        bold: false,
        italic: false,
        underline: false,
      },
    };
  },
  methods: {
    toggleWrapText(format) {
      const textarea = this.$refs.textarea;
      const { value, selectionStart, selectionEnd } = textarea;

      // Get selected text
      const selectedText = value.substring(selectionStart, selectionEnd);

      // Determine if format is currently applied
      const isFormatted =
        selectedText.startsWith(format) && selectedText.endsWith(format);

      // If already formatted, remove format
      let newText;
      if (isFormatted) {
        newText = selectedText.slice(format.length, -format.length);
      } else {
        newText = format + selectedText + format;
      }

      // Update content with formatted text
      this.content =
        value.substring(0, selectionStart) +
        newText +
        value.substring(selectionEnd);

      // Adjust selection to wrap new text correctly
      this.$nextTick(() => {
        textarea.setSelectionRange(
          selectionStart,
          selectionStart + newText.length
        );
        textarea.focus();
      });
    },
    insertLink() {
      const textarea = this.$refs.textarea;
      const { value, selectionStart, selectionEnd } = textarea;
      const selectedText = value.substring(selectionStart, selectionEnd) || "Link Text";

      const linkText = `[${selectedText}](https://)`;

      // Cập nhật nội dung với liên kết
      this.content = value.substring(0, selectionStart) + linkText + value.substring(selectionEnd);

      // Điều chỉnh vị trí con trỏ
      this.$nextTick(() => {
        textarea.setSelectionRange(selectionStart + selectedText.length + 3, selectionStart + selectedText.length + 11);
        textarea.focus();
      });
    },
    renderMarkdown(text) {
      return text
        .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") // Bold
        .replace(/\*(.+?)\*/g, "<i>$1</i>") // Italic
        .replace(/__(.+?)__/g, "<u>$1</u>") // Underline
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>'); // Links
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
}

.toolbar button {
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 4px;
}

textarea {
  width: 100%;
  min-height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}

.preview {
  margin-top: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
