import { styled } from '@mui/system';

import Container from '/src/components/Container';
import PureCmsBlock from '/src/features/cmsPages/cmsBlocks/pureCmsBlock';

const ContainerBlock = ({ cmsBlock, cmsBlocks, ...other }) => {
  const { cmsBlockFieldValues } = cmsBlock;
  const nestedBlockIds = cmsBlockFieldValues['Container Nested Blocks']?.value || [];
  const nestedBlocks = nestedBlockIds.map((nestedBlockId) => cmsBlocks[nestedBlockId]);

  return (
    <Container>
      {nestedBlocks.map((nestedBlock) => (
        <PureCmsBlock
          cmsBlock={nestedBlock}
          cmsBlocks={cmsBlocks}
          key={nestedBlock.id}
          {...other}
        />
      ))}
    </Container>
  );
};

export default ContainerBlock;
