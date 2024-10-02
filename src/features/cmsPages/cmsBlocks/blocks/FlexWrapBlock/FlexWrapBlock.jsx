import { styled } from '@mui/system';

import FlexWrap from '/src/components/FlexWrap';
import PureCmsBlock from '/src/features/cmsPages/cmsBlocks/pureCmsBlock';

const FlexWrapBlock = ({ cmsBlock, cmsBlocks, ...other }) => {
  const { cmsBlockFieldValues } = cmsBlock;
  const nestedBlockIds = cmsBlockFieldValues['Flex Wrap Nested Blocks']?.value || [];
  const nestedBlocks = nestedBlockIds.map((nestedBlockId) => cmsBlocks[nestedBlockId]);

  return (
    <FlexWrap>
      {nestedBlocks.map((nestedBlock) => (
        <PureCmsBlock
          cmsBlock={nestedBlock}
          cmsBlocks={cmsBlocks}
          key={nestedBlock.id}
          {...other}
        />
      ))}
    </FlexWrap>
  );
};

export default FlexWrapBlock;
