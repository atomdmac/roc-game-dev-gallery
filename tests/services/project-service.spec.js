import { expect } from 'chai';
import * as projects from 'services/project-service';

describe.only('Projects Service', function () {

  // Endpoint: Search by Name
  describe('Search By Name', function () {
    it('Should return search results', function () {
      return projects.searchByName({ search: 'Project 1' })
        .then(function (results) {
          expect(results).to.have.length(1);
          expect(results[0]).to.have.all.keys(
            'id',
            'name',
            'author',
            'link',
            'tools',
            'tags'
          );
          expect(results[0].name).to.equal('Project 1');
        });
    });

    it('Should not care about case sensitivity', function () {
      return projects.searchByName({ search: 'project 1' })
        .then(function (results) {
          expect(results).to.have.length(1);
        });
    });
  });
});
