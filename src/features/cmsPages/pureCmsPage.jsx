import PureCmsBlock from './cmsBlocks/pureCmsBlock';

const PureCmsPage = ({ cmsPage, data }) => {
  const { cmsBlocks, cmsMedia } = cmsPage;
  const rootBlocks = Object.values(cmsPage.cmsBlocks)
    .filter((cmsBlock) => cmsBlock.cmsBlockIsRoot);

  return rootBlocks.map((cmsBlock) => (
    <PureCmsBlock
      cmsBlock={cmsBlock}
      cmsBlocks={cmsPage.cmsBlocks}
      cmsMedia={cmsMedia}
      data={data}
      key={cmsBlock.id}
    />
  ))
};

export default PureCmsPage;
