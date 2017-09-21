import { expect } from 'chai';
import { LinkStore } from './';

describe('#LinkStore', () => {

  describe('@state', () => {

    it('should return links', () => {
      const linkStore = new LinkStore();
      linkStore.add({ id: 0, url: 'http://link.url' });
      linkStore.add({ id: 5, url: 'http://link.url' });
      linkStore.add({ id: 10, url: 'http://link.url' });
      expect(linkStore.state).to.eql([
        { id: 0, url: 'http://link.url' },
        { id: 5, url: 'http://link.url' },
        { id: 10, url: 'http://link.url' }
      ]);
    });

  });

  describe('#add', () => {

    it('should add link based on relative id', () => {
      const linkStore = new LinkStore();
      linkStore.add({ id: 10, url: 'http://link.url' });
      linkStore.add({ id: 0, url: 'http://link.url' });
      linkStore.add({ id: 5, url: 'http://link.url' });
      expect(linkStore.state).to.eql([
        { id: 0, url: 'http://link.url' },
        { id: 5, url: 'http://link.url' },
        { id: 10, url: 'http://link.url' }
      ]);
    });

  });

  describe('#remove', () => {

    it('should remove link based on relative id', () => {
      const linkStore = new LinkStore();
      linkStore.add({ id: 10, url: 'http://link.url' });
      linkStore.add({ id: 0, url: 'http://link.url' });
      linkStore.add({ id: 5, url: 'http://link.url' });
      linkStore.remove({ id: 10, url: 'http://link.url' });
      expect(linkStore.state).to.eql([
        { id: 0, url: 'http://link.url' },
        { id: 5, url: 'http://link.url' }
      ]);
    });

  });

  describe('#update', () => {

    it('should remove link based on relative id', () => {
      const linkStore = new LinkStore();
      linkStore.add({ id: 0, url: 'http://link.url' });
      linkStore.update({ id: 0, url: 'http://new.link.url' });
      expect(linkStore.state).to.eql([{ id: 0, url: 'http://new.link.url' }]);
    });

  });

});
