node {
  // -- git variables --
  final def gitUrl = "git@gitlab.vitroconnect.de:vcpng/arti-ts-e2e.git"
  final def nexusNpmRepo = "//repo.vitroconnect.de/repository/vc-npm/"

  def nodeJs = tool name: "node-17.9.1"
  env.PATH = "${nodeJs}/bin:$PATH"

  stage('Checkout from git') {
    deleteDir()
    echo "Checkout ${env.BRANCH_NAME} branch"
    git branch: "${env.BRANCH_NAME}", credentialsId: 'jenkins-ci-git-ssh', url: "${gitUrl}"
  }

  stage('Install node_modules') {
    // -- get npm token from nexus --
    withCredentials([usernamePassword(credentialsId: 'jenkins-ci-vc', passwordVariable: 'NXS_PW',
      usernameVariable: 'NXS_USER')]) {

      final def requestBody = """
{"name": "$NXS_USER", "password": "$NXS_PW"}
"""
      final def token = readJSON(text: httpRequest(url: "https:${nexusNpmRepo}-/user/org.couchdb.user:${NXS_USER}",
        httpMode: 'PUT',
        requestBody: requestBody,
        contentType: 'APPLICATION_JSON',
        acceptType: 'APPLICATION_JSON').content)['token']

      sh "echo ${nexusNpmRepo}:_authToken=${token} >> .npmrc"
      sh "npm install"
    }
  }

    stage('Run cypress tests') {
      sh "CYPRESS_API_URL=\"https://sorry-cypress-director.test.vc.vtnx.net\" npx cy2 run --headless --env configFile=test --parallel --key XXX --record --ci-build-id arti-ts-e2e-${env.BUILD_NUMBER}"
    }
}
