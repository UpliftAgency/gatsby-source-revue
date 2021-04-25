import { SourceNodesArgs } from "gatsby";
import RevueClient from "twitter-revue-client";

const ISSUE_NODE_TYPE = "RevueIssue";

interface PluginOptions {
  token: string;
}

export const sourceNodes = async (
  { actions, createContentDigest, createNodeId }: SourceNodesArgs,
  { token }: PluginOptions
) => {
  const { createNode } = actions;
  const revueClient = new RevueClient({ token });

  const issues = await revueClient.getAllSentIssues();
  issues.forEach((issue) =>
    createNode({
      ...issue,
      rawId: issue.id,
      id: createNodeId(`${ISSUE_NODE_TYPE}:${issue.id}`),
      parent: null,
      children: [],
      internal: {
        type: ISSUE_NODE_TYPE,
        content: JSON.stringify(issue),
        contentDigest: createContentDigest(issue),
      },
    })
  );
};
