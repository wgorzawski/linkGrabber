<template>
  <div class="container">
    <h2>Saved URLs</h2>
    <input v-model="groupName" placeholder="Group Name">
    <button @click="saveUrl">Save URL</button>
    <div v-for="(urls, group) in savedUrls" :key="group" class="group"
         @dragover.prevent @drop="dropItem(group)">
      <div class="group-title">{{ group }}</div>
      <div v-for="(item, index) in urls" :key="index" class="url-item" draggable="true"
           @dragstart="dragStart(group, index)" @dragend="dragEnd">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupName: '',
      savedUrls: {},
      draggedItem: null,
      draggedFromGroup: null,
      draggedFromIndex: null,
    };
  },
  methods: {
    dragStart(group, index) {
      this.draggedItem = this.savedUrls[group][index];
      this.draggedFromGroup = group;
      this.draggedFromIndex = index;
    },
    dragEnd() {
      this.draggedItem = null;
      this.draggedFromGroup = null;
      this.draggedFromIndex = null;
    },
    dropItem(toGroup) {
      if (this.draggedItem && this.draggedFromGroup !== toGroup) {
        // Remove from old group
        this.savedUrls[this.draggedFromGroup].splice(this.draggedFromIndex, 1);
        // Add to new group
        this.savedUrls[toGroup].push(this.draggedItem);

        this.updateStorage();
        this.dragEnd(); // Clean up drag state
      }
    },

    saveUrl() {
      const groupName = this.groupName || 'Ungrouped';

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        const url = tab.url;
        const title = tab.title;

        if (!this.savedUrls[groupName]) {
          this.savedUrls[groupName] = [];
        }
        this.savedUrls[groupName].push({ title, url });

        this.updateStorage();
      });
    },
    updateStorage() {
      chrome.storage.sync.set({ savedUrls: this.savedUrls });
      console.log('savedUrls', this.savedUrls);
    },
    loadStorage() {
      chrome.storage.sync.get(['savedUrls'], (result) => {
        this.savedUrls = result.savedUrls || {};
      });
    }
  },
  mounted() {
    this.loadStorage();
  }
};
</script>