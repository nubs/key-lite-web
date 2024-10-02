import { styled } from '@mui/system';
import Handlebars from 'handlebars';
import ReactMarkdown from 'react-markdown';

const BaseMarkdownSection = styled(
  'div',
  {
    name: 'KeyLiteMarkdownSection',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
}));

const MarkdownSection = ({ cmsBlock, data }) => {
  const { cmsBlockFieldValues } = cmsBlock;

  const markdownTemplate = Handlebars.compile(cmsBlockFieldValues['Markdown Section Markdown']?.value);

  return (
    <BaseMarkdownSection>
      <ReactMarkdown>
        {markdownTemplate(data)}
      </ReactMarkdown>
    </BaseMarkdownSection>
  );
};

export default MarkdownSection;
