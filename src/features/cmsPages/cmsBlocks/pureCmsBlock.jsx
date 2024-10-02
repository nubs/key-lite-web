import cmsBlockMap from './cmsBlockMap';

const PureCmsBlock = (props) => {
  const { cmsBlock } = props;
  const cmsBlockTemplateKey = cmsBlock.cmsBlockTemplateKey;
  const Block = cmsBlockMap[cmsBlockTemplateKey];
  
  if (!Block) {
    throw new Error(`Unknown CMS Block '${cmsBlockTemplateKey}'`);
  }

  return (
    <Block {...props} />
  );
};

export default PureCmsBlock;
