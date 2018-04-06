const should = require('chai').should(),
    nodeUtils = require('./../util/nodeUtils'),
    getValidParents = nodeUtils.getValidParents,
    getValidPrereqs = nodeUtils.getValidPrereqs;



describe('#getValidParents', () => {
    let nodeUri = 'testedNode';
    let nodesMap = {
        testedNode: {uri: 'testedNode', parent_uri:null},
        rootNode: {uri: 'rootNode', parent_uri:'domain'},
        node1 : {uri: 'node1', parent_uri: 'rootNode'},
        node2: {uri: 'node2', parent_uri: 'testedNode'},
        node3: {uri: 'node3', parent_uri: 'node2'}
    };

    let validParentUris = ['rootNode', 'node1'];

   it('gets parents for node correctly', () => {
       validParentUris.should.equal(getValidParents(nodeUri, nodesMap))
   });
});