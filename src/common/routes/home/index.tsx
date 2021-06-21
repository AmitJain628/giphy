import React, { useEffect } from 'react';
import { calculateConnectedNode, createNodes, getEdgeWeights, updateColor } from '@home/utils';
import { IEdgeNodes, INodes } from '@home/types';
import AppConstant from '@src/common/constants/appConstants';

import { StyledGrid } from './styles';

const Home: React.FC = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
     const initNodes = createNodes();
     const edgesByNode = getEdgeWeights(initNodes);
     setNodesState(initNodes, edgesByNode);
    }
  }, []);

  const setNodesState = (newNodes: INodes, newNodeEges: IEdgeNodes) => {
    getSuggestedColor(newNodes, newNodeEges);
  };

  const getSuggestedColor = (newNodes: INodes, newNodeEges: IEdgeNodes) => {
        const colors = Object.keys(AppConstant.COLORS);
        let max = Number.MIN_SAFE_INTEGER;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < colors.length; i++) {
          const updatedNode: INodes = {...newNodes};
          const updatedNodeEges: IEdgeNodes = {...newNodeEges};
          updateColor(Number(colors[i]), updatedNode, updatedNodeEges);
          const colorCount = calculateConnectedNode(updatedNodeEges);
          if (colorCount > max) {
            max = colorCount;
          }
        }

  };

  return (
       <StyledGrid>
        <div>
          I am home
        </div>
       </StyledGrid>
  );
};

export default Home;
